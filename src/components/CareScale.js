//importer deux images significatifs 
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

//Objet nommée CareScale
function CareScale({ scaleValue, careType }) {
	//echele de 1 à 3
	const range = [1, 2, 3]

	const quantityLabel = {
		1: 'peu',
		2: 'modérément',
		3: 'beaucoup'
	}
	/**Je vais commencer par préciser une  prop   de  type  pour mon composant  CareScale 
	 *  et réutiliser ce composant entre l'ensoleillement et l'arrosage  
	 * */
	const scaleType = careType === 'light' ? 
	(<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)		
	return (
		<div onClick={() =>
			alert(
				`Cette plante requiert ${quantityLabel[scaleValue]} ${
					careType === 'light' ? 'de lumière' : "d'arrosage"
				}`
			)
		}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale