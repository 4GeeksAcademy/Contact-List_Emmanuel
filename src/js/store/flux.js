const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: [],
		contact: 
			{
				full_name: "",
				email: "",
				agenda_slug: "Emmanuel",
				address:"",
				phone:""
			},
		},
	  
	  actions: {
		
		handleChange: (e) => {
		  e.preventDefault();
		  const { name, value } = e.target;
		  setStore({ ...getStore().contact, [name]: value });
		},
		loadSomeData: () => {
		  fetch(
			"https://assets.breatheco.de/apis/fake/contact/agenda/Emmanuel"
		  )
			.then((res) => res.json())
			.then((data) => {
			  setStore({ contacts: data });
			})
			.catch((error) => {
			  console.log("Error loading contacts:", error);
			});
		},
		deleteContact: async(id) => {
		  fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
			method: "DELETE",
		  })
			.then((response) => {
			  if (!response.ok) {
				throw new Error("Error borrando contacto falso positivo.");
			  }
			//   const { contacts } = getStore();
			//   const updatedContacts = contacts.filter(
			// 	(contact) => contact.id !== id
			//   );
			setStore((prevStore) => ({
				contacts: prevStore.contacts.filter((contact) => contact.id !== id),
			  })
      );
			//   setStore({ contacts: updatedContacts });
			})
			.catch((error) => {
			  console.error("Error eliminando contacto", error);
			});
		},
		createContact: (newContact) => {
		  fetch("https://assets.breatheco.de/apis/fake/contact/", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(newContact),
		  })
			.then((response) => {
			  if (!response.ok) {
				throw new Error("Error creando.");
			  }
			
			  const { contacts } = getStore();
			  const { contact } = getStore();
			  setStore([...contacts, { ...contact }]);
			  setStore({
				full_name: "",
				email: "",
				phone: "",
				address: "",
			  });
			})
			.catch((error) => {
			  console.error("Erreur lors de la création du contact:", error);
			});
		},
		
	  },
	};
  };
  
  export default getState;