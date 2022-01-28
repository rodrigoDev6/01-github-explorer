export function RepositoryItem(props){
  return(
        <li>
          <strong>{props.repository?.name ?? 'repo not found' }</strong>
    
          <p>{props.repository?.description ?? 'desc not found'}</p>
    
          <a href={props.repository?.link ?? '#'}>Access Repository</a>
      </li>
  )
}