'use client'
import { useEffect } from 'react'
import styles from '../../styles/contentModify.module.scss'
// 커스텀훅
import useSetData from '@/hook/setData/useSetData'
import useUpDateData from '@/hook/dataFetching/useUpdateData'
import useDeleteData from '@/hook/dataFetching/useDeleteData'


export default function ContentModify(props) {
    const { content, handleInputChange, setPrevContent } = useSetData()
    const { updateContent } = useUpDateData()
    const { deleteContent } = useDeleteData()
    // 현재 컴포넌트에서만 setPrevContent()를 실행하기 때문에 커스텀훅 내부가 아닌, 컴포넌트에서 useEffect()실행
    // 기존 컨텐츠를 DB에서 가져와, input들의 defaultValue로 설정함
    useEffect(()=>{
        setPrevContent(props.params.id)
    }, [])

    return (
        <section className={ styles.content_modify }>
            <h1>EDIT CONTENT</h1>
            <div className={ styles.modify_box }>
                <div className={ styles.modify_item }>
                    <h3>게임타이틀</h3>
                    <input type="text" name="title" defaultValue={ content.title } onChange={(e)=>{ handleInputChange(e) }}/>
                </div>
                <div className={ styles.modify_item }>
                    <h3>정식 출시일</h3>
                    <input type="date" name="releaseDate" defaultValue={ content.releaseDate } onChange={(e)=>{ handleInputChange(e) }}/>
                </div>
                <div className={ styles.modify_item }>
                    <h3>이미지</h3>
                    <p>이미지를 다시 선택해주세요.</p>
                    <input type="file" name="image" defaultValue={ content.image } onChange={(e)=>{ handleInputChange(e) }}/>
                </div>
                <div className={ styles.modify_item }>
                    <h3>트레일러 URL</h3>
                    <input type="text" name="trailerUrl" defaultValue={ content.trailerUrl } onChange={(e)=>{ handleInputChange(e) }}/>
                </div>
            </div>
            <div className={ styles.btn_box }>
                <button onClick={()=>{ updateContent(content, props.params.id) }}>컨텐츠 수정</button>
                <button onClick={()=>{ deleteContent(props.params.id) }}>컨텐츠 삭제</button>
            </div>
        </section>
    )
}