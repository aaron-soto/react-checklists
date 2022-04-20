import './hangman.scss';

import { useEffect, useState } from 'react';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { alphabet } from 'data/Alphabet';
import { sportsWords } from '../../data/SportsWords';

export const Hangman = () => {
	const [word, setWord] = useState({});
	const [correctLetters, setCorrectLetters] = useState(0);
	let rawWord = sportsWords[1];

	const wordObj = new Object();

	useEffect(() => {
		rawWord.split('').forEach((letter, idx) => {
			wordObj[idx] = {
				letter: letter,
				guessed: false,
			};
		});
		setWord(wordObj);
	}, []);

	useEffect(() => {
		Object.keys(word).forEach((idx) => {
			if (word[idx].guessed) {
				setCorrectLetters(correctLetters + 1);
			}
		});
	}, [word]);

	useEffect(() => {
		console.log(correctLetters);
	}, [correctLetters]);

	const checkLetter = (letter) => {
		Object.keys(word).forEach((idx) => {
			if (word[idx].letter.toLowerCase() === letter.toLowerCase()) {
				word[idx].guessed = true;
				setWord({ ...word });
			}
		});
	};

	return (
		<div className='hangman'>
			<div className='container'>
				<div className='game-data'>
					<h2>React Hangman</h2>
					<div className='scores'>
						<span className='score'>
							Wins: <span className='value'>0</span>
						</span>
						<span className='score'>
							Winstreak: <span className='value'>0</span>
						</span>
						<span className='score'>
							Loses: <span className='value'>0</span>
						</span>
					</div>
					<p className='coins'>
						Coins: <span className='value'>20</span>
					</p>
					<div className='hearts'>
						<AiFillHeart className='heart' />
						<AiFillHeart className='heart' />
						<AiFillHeart className='heart' />
						<AiFillHeart className='heart' />
						<AiFillHeart className='heart' />
						<AiFillHeart className='heart' />
						<AiOutlineHeart className='heart' />
					</div>

					{word && (
						<div className='game-word'>
							{Object.keys(word).map((letterIdx, idx) => {
								return (
									<div key={idx} className='line'>
										{word[letterIdx].guessed == true
											? idx === 0
												? word[letterIdx].letter.toUpperCase()
												: word[letterIdx].letter
											: ''}
									</div>
								);
							})}
						</div>
					)}
				</div>

				<div className='game-keys'>
					{alphabet.map((letter) => {
						return (
							<div className='letter' onClick={(e) => checkLetter(letter)}>
								{letter}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
