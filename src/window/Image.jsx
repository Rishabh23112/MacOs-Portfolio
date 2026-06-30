import WindowControls from '#components/WindowControls'
import windowWrapper from '#hoc/windowWrapper'
import { useWindowStore } from '#store/window'

const ImageContent = () => {
  const { windows } = useWindowStore()
  const fileData = windows.imgfile?.data

  if (!fileData?.imageUrl) return null

  return (
    <div className='w-full bg-white text-black shadow-xl'>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <h2 className='truncate text-sm font-semibold'>{fileData.name}</h2>
      </div>

      <div className='p-4'>
        <img
          src={fileData.imageUrl}
          alt={fileData.name}
          className='h-full max-h-[30rem] w-full rounded object-cover overflow-hidden '
        />
      </div>
    </div>
  )
}

const ImageWindow = windowWrapper(ImageContent, 'imgfile')

export default ImageWindow
