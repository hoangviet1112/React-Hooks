import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const UseEffectHookExample5 = () => {
    const [lessonId, setLessonId] = useState(1)
  
    const lessons = [
        {
            id: 1,
            name: 'What is ReactJS? Why should learn ReactJS?'
        },
        {
            id: 2,
            name: 'What are SPA and MPA?'
        },
        {
            id: 3,
            name: 'Arrow Function'
        }
    ]

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    
    return (
        <div>
            <ul>
                {
                    lessons.map(lesson => {
                        return (<li key={lesson.id} style={{
                            color: lessonId === lesson.id ? 
                                    "red" : "#333"
                        }} 
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>)
                    })
                }
            </ul>
        </div>
    );
};

export default UseEffectHookExample5;
