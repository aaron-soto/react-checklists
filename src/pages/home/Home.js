import { CodeSnippet } from 'components/code/CodeSnippet';
import { InlineLink } from 'utils/inline-link/InlineLink';

export const Home = () => {
	return (
		<>
			{/* <div className='container lists-container'>
				<h2>To do Lists</h2>
				<ul className='task-list-main'>
					<TaskMainListItem id='School' total={10} complete={3} />
					<TaskMainListItem id='Personal' total={4} complete={3} />
					<TaskMainListItem id='Work' total={12} complete={7} />
				</ul>
			</div> */}

			<div className='container carousel'>
				<div className='parent-wrapper'>
					<div className='child red'></div>
					<div className='child yellow'></div>
					<div className='child green'></div>
					<div className='child orange'></div>
					<div className='child blue'></div>
				</div>
			</div>

			<div className='container content-container'>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illum
					maiores recusandae voluptas quisquam repellat quo reprehenderit dolor
					laborum itaque animi dolorum veritatis officia tenetur ipsum, non
					ipsam magnam, corporis cumque sunt magni. Delectus temporibus
					consectetur qui laborum amet nostrum ex rem totam, iusto, id voluptas
					debitis atque magni facilis rerum eum optio, mollitia deleniti. Error,
					excepturi.
				</p>

				<div className='input-group'>
					<input type='text' className='input-box' placeholder='Sample Input' />
					<input type='text' className='input-box' placeholder='Sample Input' />
					<div className='btn btn-primary'>Click Me</div>
				</div>

				<CodeSnippet language='javascript'>{`<div className="child red"></div>`}</CodeSnippet>
				<CodeSnippet language='css'>{`.child {
	display: flex;
	justify-content: center;
	align-items: center;
}`}</CodeSnippet>

				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illum
					maiores recusandae voluptas quisquam repellat quo reprehenderit dolor
					laborum itaque animi{' '}
					<span className='inline-code'>dolorum veritatis officia</span> tenetur
					ipsum, non ipsam magnam, corporis cumque sunt magni. Delectus
					temporibus consectetur qui laborum amet nostrum ex rem totam, iusto,
					id voluptas debitis atque magni facilis rerum eum optio, mollitia
					deleniti. Error, excepturi.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
					aspernatur fugit dolor <InlineLink href='#'>excepturi</InlineLink>{' '}
					alias dolore aliquid consectetur nemo voluptates explicabo. Quisquam
					totam accusamus debitis sequi saepe deleniti quod commodi fuga.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
					quam voluptates suscipit reprehenderit tempore consequatur modi,
					facilis veniam reiciendis repellendus minus iure mollitia repellat!
					Consequatur similique fuga repudiandae aliquid. Aut impedit minima
					fugit accusamus dolor libero quo qui quibusdam dicta autem excepturi,
					repellat neque architecto?
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
					aspernatur fugit dolor Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Distinctio, aliquam ex porro alias atque doloremque
					consequatur totam harum sit sint. alias dolore aliquid consectetur
					nemo voluptates explicabo. Quisquam totam accusamus debitis sequi
					saepe deleniti quod commodi fuga.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
					quam voluptates suscipit reprehenderit tempore consequatur modi,
					facilis veniam reiciendis repellendus minus iure mollitia repellat!
					Consequatur similique fuga repudiandae aliquid. Aut impedit minima
					fugit accusamus dolor libero quo qui quibusdam dicta autem excepturi,
					repellat neque architecto?
				</p>

				<iframe
					src='https://aaron-soto.github.io/interactive-rectangles/'
					width='100%'
					height='500'
					allowfullscreen
					sandbox
				>
					<p>
						<a href='/en-US/docs/Glossary'>
							Fallback link for browsers that don't support iframes
						</a>
					</p>
				</iframe>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
					aspernatur fugit dolor <InlineLink href='#'>excepturi</InlineLink>{' '}
					alias dolore aliquid consectetur nemo voluptates explicabo. Quisquam
					totam accusamus debitis sequi saepe deleniti quod commodi fuga.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
					quam voluptates suscipit reprehenderit tempore consequatur modi,
					facilis veniam reiciendis repellendus minus iure mollitia repellat!
					Consequatur similique fuga repudiandae aliquid. Aut impedit minima
					fugit accusamus dolor libero quo qui quibusdam dicta autem excepturi,
					repellat neque architecto?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
					aspernatur fugit dolor Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Distinctio, aliquam ex porro alias atque doloremque
					consequatur totam harum sit sint. alias dolore aliquid consectetur
					nemo voluptates explicabo. Quisquam totam accusamus debitis sequi
					saepe deleniti quod commodi fuga.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
					quam voluptates suscipit reprehenderit tempore consequatur modi,
					facilis veniam reiciendis repellendus minus iure mollitia repellat!
					Consequatur similique fuga repudiandae aliquid. Aut impedit minima
					fugit accusamus dolor libero quo qui quibusdam dicta autem excepturi,
					repellat neque architecto?
				</p>
			</div>
		</>
	);
};
