import MDPreview from '@/components/md-preview'
import useMarkdownFile from '@/hooks/useMarkdownFile'

const Introduction = () => {
  const { data } = useMarkdownFile(import('@/context/file/introduction.md'))

  return (
    <MDPreview source={data} />
  )
}

export default Introduction