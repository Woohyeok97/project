import styles from '../../styles/commentMain/commentItem.module.scss'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
// MUI
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// 컴포넌트
import CommentMenu from './commentMenu';



export default function CommentItem({ comment, setUpdateSwitch }) {
    const [ menuSwitch, setMenuSwitch ] = useState(false)
    const session = useSession()

    return (
        <ListItem className={ styles.comment_item } alignItems="flex-start">
            <div className={ styles.comment }>

                {/* 사용자 아이콘 */}
                <ListItemAvatar>
                    <Avatar src={ comment.userImage }/>
                </ListItemAvatar>

                {/* 사용자 이름 & 코멘트 내용 */}
                <ListItemText primary={ comment.userName } secondary={ comment.comment } />

                {/* 좋아요 & 싫어요 버튼 */}
                <div className={ styles.btn_box }>
                    <IconButton aria-label="like" size="small">
                        <ThumbUpIcon fontSize="inherit"/>
                        <p>{ comment.like }</p>
                    </IconButton>
                    <IconButton aria-label="unlike" size="small">
                        <ThumbDownIcon fontSize="inherit"/>
                        <p>{ comment.unlike }</p>
                    </IconButton>
                </div>

            </div>

            {/* 코멘트 버튼 */}
            {/* 본인이 작성한 코멘트, 혹은 세션데이터의 role이 'damin'일 경우, 메뉴 아이콘을 보여줌 */}
            { session.data.user.email == comment.userEmail || session.data.user.role == 'admin'
            ? <div className={ styles.menu }>
                { menuSwitch ? <CommentMenu comment={ comment } setUpdateSwitch={ setUpdateSwitch }/> : null } {/* 코멘트 메뉴 */}
                <IconButton aria-label="menu" onClick={()=>{ setMenuSwitch(!menuSwitch) }}>
                    <MoreHorizIcon/> 
                </IconButton>
            </div>
            : null }
        </ListItem>
        )
}