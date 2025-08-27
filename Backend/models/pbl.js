const { pool } = require("../config/database");
const User = require("../models/user");

class PBL {
    static async host_pbl(pbl_data, username) {
        const {
            pbl_name,
            pbl_rule_book,
            proposal_Date,
            progress_date,
            final_presentation,
            student_pass,
            judge_pass,
            host_pass,
        } = pbl_data;

        const [pbl_result] = await pool.execute(
            `INSERT INTO pbl (
                pbl_name, host_username, pbl_rule_book, proposal_Date, progress_date, final_presentation,
                student_pass, judge_pass, host_pass
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                pbl_name,
                username,
                pbl_rule_book,
                proposal_Date,
                progress_date,
                final_presentation,
                student_pass,
                judge_pass,
                host_pass
            ]
        );

        const pbl_id = pbl_result.insertId;
        return pbl_id;
    }

    static async get_pbl_by_username(username) {
        const [pbl] = await pool.execute(`SELECT * FROM pbl WHERE host_username=?`, [username]);
        return pbl;
    }

    static async get_all_pbl() {
        const [pbls] = await pool.execute(`
            SELECT * from pbl`);

        return pbls;
    }

    static async get_pbl_by_id(pbl_id) {
        const [pbl] = await pool.execute(`SELECT * FROM pbl WHERE pbl_id=?`, [pbl_id]);
        return pbl;
    }


    static async get_pbl_by_name(pbl_name) {
        const [pbl] = await pool.execute(`SELECT * FROM pbl WHERE pbl_name=?`, [pbl_name]);
        return pbl;
    }

    static async get_pbls_by_judge(judge_username) {
        const [pbl] = await pool.execute(
            `SELECT * FROM pbl p 
             JOIN judgeXpbl j ON p.pbl_id=j.pbl_id 
             WHERE j.judge_username=?`,
            [judge_username]
        );
        return pbl;
    }

    static async get_pbls_by_student(student_username)
    {
        const[pbl]= await pool.execute(`select * from pbl p join studentsXpbl sp on p.pbl_id=sp.pbl_id where sp.student_username=?`,[student_username]);
        return pbl;
    }

    static async insert_student(pbl_id, student_username, student_id)
    {
            const [inserted]= await pool.execute(`insert into studentsXpbl(pbl_id, student_id, student_username) values (?,?,?)`,[pbl_id,student_id,student_username]);
            return inserted;
    }

    static async insert_judge(pbl_id, judge_username)
    {
        const[inserted] = await pool.execute(`insert into judgeXpbl(pbl_id, judge_username) values (?,?)`,[pbl_id,judge_username]);
        return inserted.insertId;
    }

    static async insert_supervisor(pbl_id,supervisor_username)
    {
        const[supervisor]= await pool.execute(`insert into supervisor(pbl_id, username) values (?,?)`,[pbl_id,supervisor_username]);
        return supervisor.insertId;
    }

    static async team_creation(pbl_id, usernames, team_info, team_name, supervisor_username)
    {
        const [team]= await pool.execute(`insert into teams(team_name, team_info) values (?,?)`,[team_name,team_info]);
        const [supervisor]= await pool.execute(`select supervisor_id from supervisor where username= ? and pbl_id =?`,[supervisor_username,pbl_id]);
        for(const username in usernames)
        {
            const student_username = (username || "").trim();
                 console.log('this is the user ',student_username)
                if (!student_username) continue;  

                const user = await User.findByUsername(student_username);
               
            if (user) {
                     const [teamXpbl]= await pool.execute(`insert into teamXpbl(team_id, pbl_id, username, supervisor_id) values(?,?,?,?)`,[team.insertId,pbl_id, username,supervisor.supervisor_id]);
                    } 
            else {
            console.warn(`User not found: ${student_username_username} — skipping student entry`);
            }
        }
        return team.insertId;
    }

static async get_team_details(team_id, pbl_id) {
        try {
            const [teamRows] = await pool.execute(
                `SELECT team_name, team_info 
                 FROM teams 
                 WHERE team_id = ?`,
                [team_id]
            );

            if (teamRows.length === 0) {
                return { message: "Team not found" };
            }

            const teamName = teamRows[0].team_name;
            const teamInfo = teamRows[0].team_info;

            const [supervisorRows] = await pool.execute(
                `SELECT u.full_name AS supervisor_name 
                 FROM supervisor s 
                 JOIN users u ON s.username = u.username
                 WHERE s.supervisor_id = (
                    SELECT supervisor_id 
                    FROM teamXpbl 
                    WHERE team_id = ? AND pbl_id = ?
                 )`,
                [team_id, pbl_id]
            );

            const supervisorName = supervisorRows.length > 0 ? supervisorRows[0].supervisor_name : null;

            const [memberRows] = await pool.execute(
                `SELECT u.full_name, u.username, sp.student_id
                 FROM teamXpbl tx
                 JOIN users u ON tx.username = u.username
                 LEFT JOIN studentsXpbl sp ON sp.student_username = u.username AND sp.pbl_id = tx.pbl_id
                 WHERE tx.team_id = ? AND tx.pbl_id = ?`,
                [team_id, pbl_id]
            );

            return {
                team_name: teamName,
                team_info: teamInfo,
                supervisor_name: supervisorName,
                members: memberRows
            };
        } catch (error) {
            console.error("Error fetching PBL team details:", error);
            throw error;
        }
    }

    static async judge_marking_in_pbl(judge_username, pbl_id, student_username, pbl_criteria_ids, presentation_type, marks, comments)
    {
        for(let i = 0; i < pbl_criteria_ids.length; i++)
        {
            const pbl_criteria_id = pbl_criteria_ids[i];
            const mark= marks[i];
            await pool.execute(`insert into pbl_markings(pbl_id, judge_username, student_username, pbl_criteria_id,presentation_type,marks, comments ) values(?,?,?,?,?,?,?)`,[pbl_id,judge_username,student_username,pbl_criteria_id,presentation_type,mark,comments]);
        }
        return true;
    }

    static async get_judge_marks(judge_username, pbl_id)
    {
        const [marks]= await pool.execute(`select * from pbl_markings where judge_username= ? and pbl_id = ?`,[judge_username,pbl_id]);
        return marks;
    }

    static async getStudentMarkings(pbl_id, student_username) {
        try {
            const [markings] = await pool.execute(
                `SELECT 
                    pm.marks,
                    pm.comments,
                    pm.judge_username,
                    u.full_name AS judge_name,
                    pc.criteria_info
                 FROM pbl_markings pm
                 JOIN users u ON pm.judge_username = u.username
                 JOIN pbl_criteria pc ON pm.pbl_criteria_id = pc.pbl_criteria_id
                 WHERE pm.pbl_id = ? AND pm.student_username = ?`,
                [pbl_id, student_username]
            );

            return markings.map(m => ({
                judge_name: m.judge_name,
                judge_username: m.judge_username,
                criteria_info: m.criteria_info,
                marks: m.marks,
                comments: m.comments
            }));
        } catch (error) {
            console.error("Error in getStudentMarkings:", error);
            throw error;
        }
    }

    static async getTotalMarksForStudents(pbl_id) {
        try {
            const [results] = await pool.execute(
                `SELECT 
                    pm.student_username,
                    u.full_name,
                    SUM(pm.marks) AS total_marks,
                    AVG(pm.marks) AS average_marks
                 FROM pbl_markings pm
                 JOIN users u ON pm.student_username = u.username
                 WHERE pm.pbl_id = ?
                 GROUP BY pm.student_username, u.full_name
                 ORDER BY total_marks DESC`,
                [pbl_id]
            );

            return results.map(r => ({
                student_username: r.student_username,
                student_name: r.full_name,
                total_marks: r.total_marks,
                average_marks: r.average_marks
            }));
        } catch (error) {
            console.error("Error in getTotalMarksForStudents:", error);
            throw error;
        }
    }

    static async role_finding(username, pbl_id) {
        const [role] = await pool.execute(
            `SELECT u.username, p.pbl_id,
                CASE
                    WHEN p.host_username = u.username THEN 'Host'
                    WHEN j.judge_username = u.username THEN 'Judge'
                    WHEN sp.student_username = u.username THEN 'Student'
                    ELSE 'No Role'
                END AS role
            FROM users u
                LEFT JOIN pbl p ON p.pbl_id = ?
                LEFT JOIN judgeXpbl j ON j.pbl_id = p.pbl_id AND j.judge_username = u.username
                LEFT JOIN studentsXpbl sp ON sp.pbl_id = p.pbl_id AND sp.student_username = u.username
            WHERE u.username = ?`,
            [pbl_id, username]
        );
        return role;
    }
}

module.exports = PBL;
