import MDPreview from '@/components/md-preview'
import useMarkdownFile from '@/hooks/useMarkdownFile'

const DynamicField = () => {
  const { data } = useMarkdownFile(import('@/context/file/dynamic-field.md'))

  const codeDemoComponents = {
    'dynamicForm': (
      <button>asdaqw</button>
    )
  }

  return (
    <MDPreview source={data} codeDemoComponents={codeDemoComponents} />
  )
}

export default DynamicField