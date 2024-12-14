import { Request, Response } from 'express';
import  Student  from '../models/Student.js';
import { Types } from 'mongoose';

export const headCount = async (_req: Request, res: Response) => {
  try {
    const studentCount = await Student.aggregate([
      { $group: { _id: null, count: { $sum: 1 } } }
    ]);
    res.json(studentCount[0]);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const grade = async (req: Request, res: Response) => {
  try {
    const student = await Student.aggregate([
      { $match: { _id: new Types.ObjectId(req.params.studentId) }},
      { $unwind: '$assignments' },
      { 
        $group: {
          _id: '$_id',
          firstName: { $first: '$firstName' },
          lastName: { $first: '$lastName' },
          overallGrade: { $avg: '$assignments.score' }
        }
      }
    ]);
    res.json(student[0]);
  } catch (err) {
    res.status(500).json(err);
  }
};
