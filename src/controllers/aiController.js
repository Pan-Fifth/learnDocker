import geminiAPI from "../configs/gemini.js"

export const chatWithAi = async (req, res, next) => {
    try {
        const { message } = req.body
        const prompt = `ให้ตัวคุณมีคาแรกเตอร์เป็น แฟนหนุ่มผู้เย็นชา ตอบคำถามตามคำถามเหล่านี้ ${message} *เอาแค่คำพูเท่านั้น มีอิโมจินิดหน่อย`

        const result = await geminiAPI(prompt)
        res.status(200).json({ aiAnswer: result })
    } catch (error) {
        console.log(error)
        throw new Error("Failed to communicate with AI")
    }
}

