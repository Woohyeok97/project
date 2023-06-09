'use client'
import styles from '../../styles/editBtn.module.scss'
import Link from 'next/link';
// MUI
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function EditBtn({ contentId }) {
    const [ isAdmin, setIsAdmin ] = useState(true)

    if(isAdmin) return (
        <div className={ styles.edit_btn }>
            <Button variant="contained" color="secondary" size="medium">
                <Link href={`admin/contentModify/${contentId}`}>EDIT</Link>
            </Button>
        </div>
    )
}