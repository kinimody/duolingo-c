import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import React from 'react'
import { Header } from './header'
import { UserProgress } from '@/components/user-progess'
const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>   
          <UserProgress activeCourse={{title:"Arabic", imageSrc: "/ae.svg"}} hearts={5}  points={100} hasActiveSubscription={false}  />
       </StickyWrapper>
      <FeedWrapper>
          <Header  title="Arabic"/>
      </FeedWrapper>
    </div>
  )
}

export default LearnPage