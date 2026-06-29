import WindowControls from '#components/WindowControls'
import windowWrapper from '#hoc/windowWrapper'
import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import React from 'react'

const Safari = () => {
  return (
    <div>
        <div id='window-header'>
            <WindowControls target='safari'/>

            <PanelLeft className='ml-10 icon'/>

            <div className='flex items-center gap-1 ml-5'>

                <ChevronLeft className='icon'/>
                <ChevronRight className='icon'/>

            </div>

            <div className='flex-1 flex-center gap-3'>
                <ShieldHalf className='icon'/>

                <div className='search'>
                    <Search className='icon'/>

                    <input type="text"
                    placeholder='Website' 
                    className='flex-1'/>
                </div>

            </div>

            <div className='flex items-center gap-5'>
                <Share className='icon'/>
                <Plus className='icon'/>
                <Copy className='icon'/>

            </div>

        </div>

            <div className='blog'>

            <div className='flex items-center justify-center w-full h-full'>
                <h1 className='text-gray-600/40 font-semibold text-4xl italic font-georama'>Comming soon</h1>
            </div>
            </div>
    </div>
  )
}

const safariWindow= windowWrapper(Safari,'safari')

export default safariWindow