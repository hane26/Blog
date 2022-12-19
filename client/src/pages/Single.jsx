import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Edit from '../img/edit.png'
import Supp from '../img/delete.png'
import {Link} from 'react-router-dom';
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div>

     <Navbar/>
     <div className='single'>
      <div className='content'>
        <img src='https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
        <div className='user'>
          <img src='https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
        <div className="info">
          <span>
            Jhon
          </span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to ={`/write?edit=2`}>  
          <img src={Edit} alt="edit" />
          </Link>
         
          <img src={Supp} alt="delete" />
        </div>
        </div>

        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas harum recusanda.</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam labore dolorem ea eveniet et totam consequuntur temporibus voluptas voluptate molestias voluptates quo at earum nulla dolore itaque, quaerat ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sit doloremque debitis incidunt rem mollitia enim, consequatur, non ducimus voluptatibus maiores facilis recusandae quia et pariatur vitae repellat, odio hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br></br> <br></br>Ad a, assumenda velit rem recusandae laborum sed perspiciatis minus itaque vero est voluptate, quia atque eum inventore repudiandae fugit tempore quidem?<br></br> <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores in animi nemo voluptas similique possimus, cum exercitationem dolore blanditiis, et repellendus dolor cumque ratione repudiandae veritatis dolores quibusdam ad! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, obcaecati. Possimus, hic vel, explicabo neque id nihil eos animi ad error praesentium in culpa! Velit aspernatur consequuntur voluptatibus dolor labore. <br></br> <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolore repellat reiciendis labore quibusdam harum, atque debitis nesciunt excepturi fuga cumque minus veniam, accusamus blanditiis autem deserunt voluptate, laboriosam error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio consectetur maiores quis, suscipit, laborum eius, fugiat ipsam aperiam nam atque? Eaque pariatur quam doloribus dolore eligendi molestias repellendus assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cupiditate esse dolores nulla culpa aspernatur, fugit, recusandae corrupti, ducimus veniam unde. Ducimus amet sequi assumenda excepturi nostrum necessitatibus libero aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima odit iusto explicabo omnis deleniti voluptatem veniam suscipit ratione, distinctio dicta eligendi fugit aperiam fugiat alias ipsa sunt a nobis!</p>
      
      </div>
      
        <Menu/>
        
      </div>
     <Footer/>
        
        
    </div>
  )
}

export default Single