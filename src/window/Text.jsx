import WindowControls from '#components/WindowControls'
import windowWrapper from '#hoc/windowWrapper'
import { useWindowStore } from '#store/window'

const TextContent = () => {
    const { windows } = useWindowStore()
    const fileData = windows.txtfile?.data

    if (!fileData) return null

    const imageUrl = fileData.imageUrl || fileData.image || null

    return (
        <div className='w-full  bg-white text-black shadow-xl'>
            <div id='window-header'>
                <WindowControls target='txtfile' />
                    <h2 className='truncate text-sm font-semibold'>{fileData.name}</h2>
            </div>

            <div className='h-full overflow-y-auto p-4'>
            {imageUrl && (
                <img
                src={imageUrl}
                alt={fileData.name}
                className='mb-4 mx-auto h-56 w-auto max-w-full rounded-full object-cover shadow-sm'
                />
                )}

                {fileData.subtitle && (
                <p className='mb-3 text-sm font-medium text-gray-700'>{fileData.subtitle}</p>
            )}

            {Array.isArray(fileData.description) &&
            fileData.description.map((paragraph, index) => (
                <p key={`${fileData.id}-${index}`} className='mb-3 text-sm leading-6 text-gray-800'>
                {paragraph}
                </p>
            ))}
        </div>
    </div>
  )
}

const TextWindow = windowWrapper(TextContent, 'txtfile')

export default TextWindow
