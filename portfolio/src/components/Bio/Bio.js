import React from 'react';
import './Bio.css';

class Bio extends React.Component {
    render () {
        return (
            <div className='bio-content'>
                <div className='personal-pic'>
                <img className='bio-pic' src='./rayPic.jpg' alt='Ray Robinson'/>
                </div>
                <div className='list-of-accomplishments'>
                <p>
                <ul>
                    <li>
                    Nulla bibendum sapien ac justo mollis consectetur.
                    </li>
                    <li>
                    Duis tincidunt mi eu metus faucibus, ut fermentum urna finibus.
                    </li>
                    <li>
                    Nulla pellentesque velit fringilla lorem rhoncus porta.
                    </li>
                    <li>
                    Pellentesque varius ante eu tempus vehicula.
                    </li>
                    <li>
                    Duis eu lacus finibus, rutrum tellus vitae, dignissim nibh.
                    </li>
                    <li>
                    Nullam eget nisl id dui cursus rhoncus eu nec nulla.
                    </li>
                    <li>
                    Duis eu mauris nec felis interdum interdum.
                    </li>
                    <li>
                    Quisque ullamcorper urna vitae eros pretium, eu elementum dolor tristique.
                    </li>
                    <li>
                    Ut luctus elit id imperdiet sodales.
                    </li>
                    <li>
                    Duis aliquet ex ut urna dignissim mattis.
                    </li>
                    <li>
                    Duis sagittis quam eget ornare accumsan.
                    </li>
                    <li>
                    Etiam non turpis id eros ultrices consectetur.
                    </li>
                    <li>
                    Sed maximus nisl eget orci sollicitudin, et luctus ex consectetur.
                    </li>
                    <li>
                    Cras eu eros pellentesque, volutpat enim ac, blandit eros.
                    </li>
                    <li>
                    Fusce scelerisque lacus volutpat efficitur malesuada.
                    </li>
                    <li>
                    Nulla et metus vehicula, tristique nulla id, gravida magna.
                    </li>
                    <li>
                    Integer a ipsum eu mauris varius lobortis.
                    </li>
                </ul>
                </p>
                </div>
                <div className='personal-bio'>
                <p>
                A creative and dependable Entry Level Web Developer possessing a strong work ethic and extensive experience in customer service. I am knowledgeable in HTML, JavaScript and CSS, as well as website development and maintenance. An entrepreneur with web development skills who can help start-up companies scale their business and succeed.
                </p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
                </div>
            </div>
        )
    }
}

export default Bio;