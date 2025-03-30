import { useState } from "react";

export default function KaraokeApp() {
    const [hoursNonStudent, setHoursNonStudent] = useState("");
    const [hoursStudent, setHoursStudent] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [totalCost, setTotalCost] = useState("");

    const calculateCost = () => {
        if (!hoursNonStudent && !hoursStudent) {
            alert("กรุณากรอกจำนวนชั่วโมง");
            return;
        }
        if (isStudent && (!hoursStudent || parseFloat(hoursStudent) <= 0)) {
            alert("โปรดกรอกจำนวนชั่วโมงในช่องที่ตรงกับประเภทสมาชิกของคุณ");
            return;
        }
        if (!isStudent && (!hoursNonStudent || parseFloat(hoursNonStudent) <= 0)) {
            alert("กรุณากรอกจำนวนชั่วโมง");
            return;
        }
        
        const parsedHours = parseFloat(isStudent ? hoursStudent : hoursNonStudent);
        const rate = isStudent ? 80 : 120;
        setTotalCost((parsedHours * rate).toFixed(2) + " บาท");
    };

    return (
        <div className="border p-4 w-96 mt-2 ml-2 border-black">
            <table className="border-collapse w-full mt-2" style={{ border: "2px solid black" }}>
                    <tr>
                        ร้านคาราโอเกะ
                    </tr>
                
            <table className="table1" style={{ border: "2px solid black" }}>
                
                <tbody>
                    <tr>
                        <td colSpan="2" >
                            <input 
                                type="radio" 
                                name="student" 
                                checked={!isStudent} 
                                onChange={() => setIsStudent(false)} 
                            /> ไม่มีบัตรนักศึกษา
                        </td>
                    </tr>
                    <tr>
                        <td  >
                            ชั่วโมงละ 120 บาท
                        </td>
                        <td >
                            <input 
                                type="number" 
                                className="border w-16 ml-2" 
                                value={hoursNonStudent} 
                                onChange={(e) => setHoursNonStudent(e.target.value)}
                            /> ชั่วโมง
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <input 
                                type="radio" 
                                name="student" 
                                checked={isStudent} 
                                onChange={() => setIsStudent(true)} 
                            /> มีบัตรนักศึกษา
                        </td>
                    </tr>
                    <tr>
                        <td >
                            ชั่วโมงละ 80 บาท
                        </td>
                        <td >
                            <input 
                                type="number" 
                                className="border w-16 ml-2" 
                                value={hoursStudent} 
                                onChange={(e) => setHoursStudent(e.target.value)}
                            /> ชั่วโมง
                        </td>
                    </tr>
                </tbody>
            </table>
            </table>
            <div className="mt-2 border p-2 border-black text-center">
            <div className="mt-2 border p-2 border-black text-center">
                <button 
                    className="border px-4 py-1 bg-blue-500 text-white mt-2" 
                    onClick={calculateCost}
                >
                    คิดเงิน
                </button>
            </div>
                รวมเป็นเงินทั้งสิ้น=
                <input 
                    type="text" 
                    className="border w-24 bg-gray-100 ml-2" 
                    value={totalCost} 
                    readOnly 
                /> บาท
            </div>
          
        </div>
    );
    
}
