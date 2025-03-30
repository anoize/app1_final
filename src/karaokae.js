import { useState } from "react";

export default function KaraokeCalculator() {
    const [generalHours, setGeneralHours] = useState("");
    const [studentHours, setStudentHours] = useState("");
    const [hasStudentID, setHasStudentID] = useState(false);
    const [finalAmount, setFinalAmount] = useState("");

    const computeTotal = () => {
        if (!generalHours && !studentHours) {
            alert("กรุณากรอกจำนวนชั่วโมงที่ต้องการใช้บริการ");
            return;
        }
        
        if (!hasStudentID && (!generalHours || parseFloat(generalHours) <= 0)) {
            alert("กรุณากรอกจำนวนชั่วโมงให้ถูกต้อง");
            return;
        }
        
        const hours = parseFloat(hasStudentID ? studentHours : generalHours);
        const ratePerHour = hasStudentID ? 80 : 120;
        setFinalAmount((hours * ratePerHour).toFixed(0));
    };

    return (
        <div className="border p-4 w-96 mt-2 ml-2 border-black">
            <table className="border-collapse w-full mt-2" style={{ border: "2px solid black" }}>
                <tr>
                    <td>ร้านคาราโอเกะ</td>
                </tr>
            </table>
            
            <table className="table1" style={{ border: "2px solid black" }}>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <input 
                                type="radio" 
                                name="membership" 
                                checked={!hasStudentID} 
                                onChange={() => setHasStudentID(false)} 
                            /> บุคคลทั่วไป
                        </td>
                    </tr>
                    <tr>
                        <td>ชั่วโมงละ 120 บาท</td>
                        <td>
                            <input 
                                type="number" 
                                className="border w-16 ml-2" 
                                value={generalHours} 
                                onChange={(e) => setGeneralHours(e.target.value)}
                            /> ชั่วโมง
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type="radio" 
                                name="membership" 
                                checked={hasStudentID} 
                                onChange={() => setHasStudentID(true)} 
                            /> นักศึกษา
                        </td>
                    </tr>
                    <tr>
                        <td>ชั่วโมงละ 80 บาท</td>
                        <td>
                            <input 
                                type="number" 
                                className="border w-16 ml-2" 
                                value={studentHours} 
                                onChange={(e) => setStudentHours(e.target.value)}
                            /> ชั่วโมง
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <div className="mt-2 border p-2 border-black text-center">
                <button 
                    className="border px-4 py-1 bg-blue-500 text-white mt-2" 
                    onClick={computeTotal}
                >
                    คำนวณราคา
                </button>
            </div>
            
            <div className="mt-2 border p-2 border-black text-center">
                รวมเป็นเงินทั้งหมด =
                <input 
                    type="text" 
                    className="border w-24 bg-gray-100 ml-2" 
                    value={finalAmount} 
                    readOnly 
                    
                />
                บาท
            </div>
        </div>
    );
}
