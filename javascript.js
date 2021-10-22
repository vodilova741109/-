
const btn = document.getElementById('btn');



function getBtn(){

const docInfo = {
  content: [
	  { text: 'Заявка', style: 'header' },
		'Вы выбрали следующие параметры:',
		// { text: 'текс', style: 'subheader' },
		// 'Параграф',
		{
			style: 'tableExample',
			table: {
				body: [
					['№ п/п', 'Название', 'К-во'],
					['1', 'Башня 1', '1'],
					['2', 'Этаж', '12'],
					['3', 'Вид планировки', '1 перегородка' ],
					['4', 'Отделка', 'Ковролин светлый, Стены краска, потолок серый' ],
					['5', 'Постащик мебели', 'Contract Interiors' ],
					['6', 'Дополнительные опции', 'Интернет, СКУД' ],
				]
			}
		},

		// 'With same height:',
		// {
		// 	style: 'tableExample',
		// 	table: {
		// 		heights: 40,
		// 		body: [
		// 			['row 1', 'column B'],
		// 			['row 2', 'column B'],
		// 			['row 3', 'column B']
		// 		]
		// 	}
		// },
		// 'With height from function:',
		// {
		// 	style: 'tableExample',
		// 	table: {
		// 		heights: function (row) {
		// 			return (row + 1) * 25;
		// 		},
		// 		body: [
		// 			['row 1', 'column B'],
		// 			['row 2', 'column B'],
		// 			['row 3', 'column B']
		// 		]
		// 	}
		// },
		// // пример 
		// { text: 'Заявка-заказ', pageBreak: 'before', style: 'header' },
		// 'Проверьте правильность данных',
		// {
		// 	style: 'tableExample',
		// 	color: '#444',
		// 	table: {
		// 		heights: 40,
		// 		widths: [200, 'auto', 'auto'],
		// 		headerRows: 2,
		// 		// keepWithHeaderRows: 1,
		// 		body: [
		// 			[{ text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center' }, {}, { text: 'Header 3', style: 'tableHeader', alignment: 'center' }],
		// 			[{ text: 'Header 1', style: 'tableHeader', alignment: 'center' }, { text: 'Header 2', style: 'tableHeader', alignment: 'center' }, { text: 'Header 3', style: 'tableHeader', alignment: 'center' }],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			[{ rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor' }, 'Sample value 2', 'Sample value 3'],
		// 			['', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', { colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time' }, ''],
		// 			['Sample value 1', '', ''],
		// 		]
		// 	}
		// },
	

	],
  styles: {
		header: {
			fontSize: 18,
			bold: true,
			margin: [0, 10, 0, 10]			
			
		},
		subheader: {
			fontSize: 16,
			bold: true,
			margin: [0, 10, 0, 5]
		},
		tableExample: {
			margin: [0, 5, 0, 15]
		},
		tableOpacityExample: {
			margin: [0, 5, 0, 15],
			fillColor: 'blue',
			fillOpacity: 0.3
		},
		tableHeader: {
			bold: true,
			fontSize: 15,
			color: 'black',
			padding: [0, 10, 0, 10],
		}
	},


}

pdfMake.createPdf(docInfo).download('name.pdf');

}

btn.addEventListener("click", getBtn);