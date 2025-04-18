'use client'

import { cn } from '@/lib/utils'
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react'
import React, { useState, useTransition } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'
import { Progress } from "@/components/ui/progress"
import { useUploadThing } from '@/lib/uploadthing'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

const Page = () => {

  const { toast } = useToast()
  const [isDragOver, SetIsDragOver] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition()
  const [uploadProgress, setUploadProgress] = useState(0)
  const router = useRouter()
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`)
      })
    },
    onUploadProgress(p) {
      setUploadProgress(p)
    }
  })
  const onDropRejected = (rejectedFile: FileRejection[]) => {
    const [file] = rejectedFile
    SetIsDragOver(false)
    toast({
      title: `${file.file.type} type is not supported !`,
      description: "Please choose a PNG, JPG or JPEG image type !",
      variant: "destructive"
    })
  }
  const onDropAccepted = (acceptedFile: File[]) => {
    startUpload(acceptedFile, { configId: undefined })
    SetIsDragOver(false)
  }


  return (
    <div className={cn("relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center", {
      "ring-blue-900/25 bg-blue-900/10" :isDragOver,
    })}>
      <div className='relative flex flex-1 flex-col items-center justify-center w-full'>
        <Dropzone 
          onDropRejected={onDropRejected} 
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => SetIsDragOver(true)}
          onDragLeave={() => SetIsDragOver(false)}
        >
          {({getRootProps, getInputProps}) => (
            <div className='h-full w-full flex-1 flex flex-col items-center justify-center' {...getRootProps()}>
              <input {...getInputProps()} />
              {
                isDragOver || isPending
                  ? (<MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2'/>)
                  : isUploading 
                      ? (<Loader2 className='animate-spin size-6 text-zinc-500 mb-2' />)
                      : (<Image className='size-10 text-zinc-500 mb-2'/>)
              }
              <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
                {
                  isUploading
                    ? (
                      <div className='flex flex-col items-center'>
                        <p>
                          Uploading...
                        </p>
                        <Progress className='mt-2 w-40 h-2 bg-gray-300' value={uploadProgress}/>
                      </div>
                    )
                    : (
                      isPending
                        ? (
                          <div className='flex flex-col items-center'>
                            <p>
                              Redirecting, please wait...
                            </p>
                          </div>
                        )
                        : (
                          isDragOver
                            ? (
                              <p>
                                <span className='font-semibold'>
                                  Drop file
                                </span> to upload
                              </p>
                            
                            )
                            :
                              <p>
                                <span className='font-semibold'>
                                  Click to upload 
                                </span> or drag and drop
                              </p>
                        )
                    )
                }
              </div>
              {
                isPending
                  ? null
                  : (
                    <p className='text-xs text-zinc-900'>
                      PNG, JPG, JPEG
                    </p>
                  )
              }
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  )
}

export default Page