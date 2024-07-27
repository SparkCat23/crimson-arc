import styles from './ChapterContainer.module.css'

import { useState, useEffect } from 'react'

function ChapterContainer({chapters = []}) {
    const [activeChapter, setActiveChapter] = useState(0)
    const [chapterList, setChapterList] = useState([])
    
    useEffect(() => {setChapterList(chapters)}, [chapters])
    
    
    return(
        <div>
            <div className={styles.chapter_selector}>
                {activeChapter !== 0 && <button onClick={() => setActiveChapter(activeChapter-1)}>Prev</button>}
                <select>
                    {chapters.length >0 && chapters.map((chapter, index) => (<option onClick={() => setActiveChapter(index)} key={chapter.id}>{chapter.title}</option>))}
                </select>
                {activeChapter !== chapterList.length-1 && <button onClick={() => setActiveChapter(activeChapter+1)}>Next</button>}
            </div>
            <div>
                <p>{chapterList.length > 0 && chapterList.at(activeChapter).content}</p>
            </div>
        </div>
    )
}

export default ChapterContainer