import { Button } from '@/components/ui/button'
import React from 'react'
const ButtonsPage = () => {
  return (
    <div className='p-2 flex flex-col max-w-[300px] '>
    <Button size="lg" variant="default">ahoj</Button>
    <Button size="lg" variant="primary">ahoj</Button>
    <Button size="lg" variant="primaryOutline">ahoj</Button>
    <Button size="lg" variant="secondary">ahoj</Button>
    <Button size="lg" variant="secondaryOutline">ahoj</Button>
    <Button size="lg" variant="danger">ahoj</Button>
    <Button size="lg" variant="dangerOutline">ahoj</Button>
    <Button size="lg" variant="super">ahoj</Button>
    <Button size="lg" variant="superOutline">ahoj</Button>
    <Button size="lg" variant="ghost">ahoj</Button>
    <Button size="lg" variant="sidebar">ahoj</Button>
    <Button size="lg" variant="sidebarOutline">ahoj</Button>
</div>
  )
}

export default ButtonsPage