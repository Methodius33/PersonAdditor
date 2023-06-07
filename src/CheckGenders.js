const CheckGenders = ({genders,setGenders})=>{
    return(
        <div>
            <label>
                <input
                    type = "checkbox"
                    checked ={genders.woman}
                    onClick ={()=>{
                        setGenders({ ...genders, woman : !genders.woman})
                    }}
                />
                Отображать женщин
            </label>
            <label>
                <input
                    type= "checkbox"
                    checked = {genders.man}
                    onClick ={()=>{
                        setGenders({...genders, man : !genders.man})
                    }}
                />
                Отображать мужчин
            </label>
        </div>
    )
}
export default CheckGenders