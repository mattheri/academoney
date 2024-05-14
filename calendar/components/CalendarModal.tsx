


    {/* Component 'Modal ajouter transaction */}
    {isModalOpen && (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-60 bg-black">
        <div className="bg-[#092d74] p-4 rounded-md border-2 border-white text-white w-64">
        <h2 className='mb-2 text-lg text-center'><b>{selectedDate && format(selectedDate, 'dd MMMM yyyy', { locale: fr })}</b></h2>
        <form action="" className='flex flex-col mb-4'>
            <label htmlFor="eventName">Transaction:</label>
            <input id='eventName' name='eventName' autoFocus={true} className='text-black' type="text" onChange={(e) => handleEventInput(e)} />
        </form>
        <button className='bg-[#bf0c1d] rounded-md p-2' onClick={() => setIsModalOpen(false)}>Annuler</button>
        <button className='bg-[#ef3832] rounded-md p-2 ml-4' onClick={() => handleAddEvent()}>Ajouter</button>
        </div>
    </div>
    )}