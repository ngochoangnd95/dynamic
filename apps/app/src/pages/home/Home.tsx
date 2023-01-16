import MDPreview from '@/components/md-preview'
import useMarkdownFile from '@/hooks/useMarkdownFile'

const Home = () => {
  const { data } = useMarkdownFile(import('../../../../../README.md'))

  return (
    <MDPreview source={data} />
  )
}

export default Home