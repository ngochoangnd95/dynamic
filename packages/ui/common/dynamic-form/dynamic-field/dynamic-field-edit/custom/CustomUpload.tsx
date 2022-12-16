import { Button, Modal, Upload, UploadProps } from "antd"
import { RcFile, UploadFile } from "antd/lib/upload"
import React, { useState } from "react"
import { AiOutlineUpload } from 'react-icons/ai'

interface CustomUploadProps extends UploadProps {
}

const uploadChildren = {
  'drag': (
    <>
      <p className="ant-upload-drag-icon">
        <AiOutlineUpload />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </>
  ),
  'select': (
    <Button icon={<AiOutlineUpload />}>Upload</Button>
  )
}

const CustomUpload = (props: CustomUploadProps) => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

  const handleCancel = () => setPreviewVisible(false)

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.type || !(/^image\/*/.test(file.type))) return
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  return (
    <>
      <Upload
        children={props.type && uploadChildren[props.type]}
        onPreview={handlePreview}
        {...props}
      />
      <Modal
        open={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}>
        <img alt="example" src={previewImage} />
      </Modal>
    </>
  )
}

export default CustomUpload