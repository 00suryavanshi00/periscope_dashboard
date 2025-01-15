import { tenders } from "@/utils/list";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res : NextApiResponse){
    res.status(200).json({
        success: true,
        data : tenders
    });
}