import MDPreview from '@/components/md-preview'
import useMarkdownFile from '@/hooks/useMarkdownFile'

const Philosophy = () => {
  const { data } = useMarkdownFile(import('@/context/file/philosophy.md'))

  return (
    <MDPreview source={data} />
  )
}

export default Philosophy