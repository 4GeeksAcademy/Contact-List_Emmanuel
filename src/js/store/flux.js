const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			myList: "Emmanuel",
			idNumber: "",
		},
		actions: {
			getContacts: async () => {
				try{
					const store = getStore()
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${store.myList}`)
					const data = await result.json()

					setStore({contacts: data})
					
					console.log("Contacts obtained successfully: ", data)
				}catch(error){
					console.log("Error getting contacts: ",error)
				}
			},

			
			deleteContact: async (id) => {
				try{

					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`,{
						method: "DELETE"
					})
					if(result.ok){
						const data = await result.json()
						console.log("Contact deleted successfully", data)
						const {getContacts} = getActions()
						getContacts()
					}
					

				}catch(error){

					console.log("Error Contact deleted unsuccessfully",error)

				}
			},

			addNewContact: async (newContact) => {
				try{
					console.log(newContact)
					const result = await fetch("https://assets.breatheco.de/apis/fake/contact/",{
						method: "POST",
						body: JSON.stringify(newContact),
						headers:{
							'Content-type': 'application/json'
						}
					})
					const data = await result.json()
					
					if(result.ok){
						const store = getStore()
						setStore({...store, contacts: [ ...store.contacts, newContact]})
						console.log("Contact uploaded",data)
					}

				}catch(error){

					console.log("Error uploading contacts", error)

				}

			},

			editContact: async (id) => {
				try{

					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`,{
						method: "PUT",
						body: JSON.stringify()
					})
					if(result.ok){
						const data = await result.json()
						console.log("Contact edited successfully", data)
						const {getContacts} = getActions()
						getContacts()
					}
					

				}catch(error){

					console.log("Contact edited unsuccessfully",error)

				}
			},

			updateId: async (id) => {
				const store = getStore()
				setStore({...store, idNumber: id})
			},

			editExistingContact : async (newContact) => {
				try{
					console.log(newContact)
					const { idNumber } = getStore()
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${idNumber}`,{
						method: "PUT",
						body: JSON.stringify(newContact),
						headers:{
							'Content-type': 'application/json'
						}
					})
					const data = await result.json()
					
					if(result.ok){
						const store = getStore()
						console.log("Contact uploaded",data)
						const { getContacts } = getActions()
						await getContacts()
						setStore({...store,idNumber: ""})
					}

				}catch(error){

					console.log("Error uploading contact", error)

				}

			},
			

		}
	};
};

export default getState;
