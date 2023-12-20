export const editorConfig = {
	readonly: false,
	toolbar: true,
	spellcheck: true,
	language: 'en',
	toolbarButtonSize: 'medium',
	// toolbarAdaptive: false,
	showCharsCounter: true,
	showWordsCounter: true,
	showXPathInStatusbar: false,
	askBeforePasteHTML: true,
	askBeforePasteFromWord: true,
	//defaultActionOnPaste: "insert_clear_html",
	// buttons: buttons,
	uploader: {
		insertImageAsBase64URI: true
	},
	width: 800,
    minHeight: 600,
	controls: {
		font: {
			command: 'fontname',
			list: {
				"'Open Sans',sans-serif": 'Open Sans',
				'Helvetica,sans-serif': 'Helvetica',
				'Arial,Helvetica,sans-serif': 'Arial',
				'Georgia,serif': 'Georgia',
				'Impact,Charcoal,sans-serif': 'Impact',
				'Tahoma,Geneva,sans-serif': 'Tahoma',
				"'Times New Roman',Times,serif": 'Times New Roman',
				'Verdana,Geneva,sans-serif': 'Verdana',
				'Consolas,monaco,monospace': 'Consolas'
			}
		}
	}
};




    // const createNewNote = () => {
    //                 fetch('http://localhost:3000/notes', {
    //             method: 'POST',
    //             body: JSON.stringify({Title: "Test", Content: content}),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //                 // 'Authorization': `Bearer ${user.token}`
    //             },
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setMessage('Content added successfully.');
    //             setTimeout(() => {
    //                 setMessage('')
    //             }, 5000)
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //              if ( err.response.status == 409) {
    //             console.log("409 Conflict error received. Calling updateMethod()...");
    //          updateNote();
    //         } 
    //       setMessage('There was a problem in creating your note.');
    //             setTimeout(() => {
    //                 setMessage('')
    //             }, 5000)
    //         });
    // }
	
	
	//     const customToolbar = {
    //     items: [
    //         'Bold',
    //         'Italic',
    //         'Underline',
    //         'StrikeThrough',
    //         'FontName',
    //         'FontSize',
    //         'FontColor',
    //         'BackgroundColor',
    //         'LowerCase',
    //         'UpperCase',
    //         '|',
    //         'Formats',
    //         'Alignments',
    //         'OrderedList',
    //         'UnorderedList',
    //         'Outdent',
    //         'Indent',
    //         '|',
    //         'CreateLink',
    //         'Image',
    //         '|',
    //         'ClearFormat',
    //         'Print',
    //         'SourceCode',
    //         'FullScreen',
    //         '|',
    //         'Undo',
    //         'Redo'
    //     ]
    // }


      //   const getANote = async(id) => {
  //     await   fetch(`http://localhost:3000/notes/${id}`)
  //         .then(res => res.json())
  //         .then(data => { console.log(data)
  //             setContent(data?.Content)
  //         })
  //         .catch(e => console.log(e))
  // }
