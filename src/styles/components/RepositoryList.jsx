import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name:'title repo',
  description: 'forms in react',
  link: 'https://github.com/rodrigoDev6?tab=repositories'
}
export function RepositoryList() {
  return(
    
    <section className="repository-list">
      <h1>Repositórios Github</h1>

    <ul>
      <RepositoryItem repository={repository}/>
      <RepositoryItem />
      <RepositoryItem />
      <RepositoryItem />
    </ul>
      
    </section>
  )
}