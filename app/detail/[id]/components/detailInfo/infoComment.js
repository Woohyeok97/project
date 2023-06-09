'use client'
import Link from 'next/link'
import styles from '../../styles/detailInfo/infoComment.module.scss'
// 컴포넌트
import CommentItem from './commentItem'
// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ChatIcon from '@mui/icons-material/Chat';
import Fab from '@mui/material/Fab';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function InfoComment({ content }) {
    
    const array = [1, 2, 3, 4]

    return (
        <Box sx={{ flexBasis : '40%', display : 'flex', flexDirection : 'column' }}>
            <Typography variant="h5" gutterBottom>
               유저 코멘트 
            </Typography>
            <List sx={{ display : 'flex', height : '100%', ml : '-16px', mr : '-16px' }}>
                <CommentItem/>
                <CommentItem/> 
                <CommentItem/>  
                <CommentItem/>              
            </List>
            <Link className={ styles.more_link } href={`/comment/${content._id}`}>
                <Fab variant="extended" sx={{ width : '100%' }}>
                    코멘트 더보기<ChatIcon sx={{ ml: 1 }}/>
                </Fab>
            </Link>
        </Box>
    )
}

