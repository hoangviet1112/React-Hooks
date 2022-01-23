import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

function UseEffectHookExample4 () {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }
    
    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {
                avatar && (
                    <img alt="" src={avatar.preview} width='50%' height='50%' />
                )
            }
        </div>
    )
}

export default UseEffectHookExample4
