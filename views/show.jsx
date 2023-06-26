const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, id}) {
    //Confirm we are getting our bread data in the terminal.
    //console.log(bread.name)
    return (
        <Default>
          <h3>{bread.name}</h3>
          <p>
            and it
            {
              bread.hasGluten
              ? <span> does </span>
              : <span> does NOT </span>
            }
            have gluten.
          </p>
          <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
          <img src={bread.image} alt={bread.name} />
          <p>Baked by {bread.getBakedBy()}</p>
          <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>
          <li><a href="/breads">Go home</a></li>
        </Default>
)}
        
module.exports = Show