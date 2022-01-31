export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'repo not found'}</strong>

      <p>{props.repository?.description ?? 'Sem descrição'}</p>

      <a href={props.repository?.html_url ?? '#'} target='_blank'>Access Repository</a>
      
    </li>
  )
}