import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import React from 'react'
const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>   
          my sticky sidebar
       </StickyWrapper>
      <FeedWrapper>
        my feed
      </FeedWrapper>
    </div>
  )
}

export default LearnPage