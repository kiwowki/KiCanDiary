import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getFormattedDate } from '../../../../util/calendar/date/dateFormat'

const TabContent = ({ item, direction }) => {
    const variants = {
        hidden: { x: direction === 1 ? '100%' : '-100%' },
        show: { x: '0%' },
        exit: { x: direction === 1 ? '-100%' : '100%' },
    }

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.a
                key={item.postNum}
                href={`/diary/view/${item.postNum}`}
                variants={variants}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.4, delay: 0.3, ease: 'easeInOut' }}
            >
                <div className="tab__box">
                    <h4 className="mb20">
                        {getFormattedDate(item.createdAt).day}
                        &nbsp;
                        {getFormattedDate(item.createdAt).month}
                        ,&nbsp;
                        {getFormattedDate(item.createdAt).year}
                    </h4>
                    <p className="">{item.content.ops[0].insert}</p>
                </div>
            </motion.a>
        </AnimatePresence>
    )
}

export default TabContent
