import './form.css';
function Form() {
    return (
        <>
            <div style={{ display: 'grid', justifyContent: 'center',padding:23}}>
                <div class="card" style={{ width: '34rem', backgroundColor: '#3c586e', color: 'white' }}>
                    <div style={{ display: 'grid', justifyContent: 'center',marginTop:37}}>
                        <div>
                            <h1>HEALTH CITY</h1>
                        </div>
                        <div style={{display:'grid',justifyContent:'center'}}>
                            <h1>HOSPITAL</h1>
                        </div>
                    </div>

                    <div class="card-body">
                        <div style={{ display: 'grid', rowGap: '28px' }}>
                            <div style={{ display: 'grid', justifyContent: 'center' }}>
                                <h5>Vaccination Consent Form</h5>
                            </div>
                            <div style={{ display: 'grid', justifyContent: 'center' }}>
                                Patient Information
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Full Legal Name</label><span>*</span>
                                <hr style={{ border: '1px solid white' }}></hr>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div>
                                    <label> Date of Birth</label><span>*</span><i class="bi bi-calendar"></i>
                                    <hr style={{ width: 229, border: '1px solid white' }}></hr>
                                </div>
                                <div>
                                    <label>Medical number(if known)</label>
                                    <hr style={{ width: 229, border: '1px solid white' }}></hr>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div>
                                    <label> PhoneNumber</label><span>*</span>
                                    <hr style={{ width: 229, border: '1px solid white' }}></hr>
                                </div>
                                <div>
                                    <label>EmailAddress</label><span>*</span>
                                    <hr style={{ width: 229, border: '1px solid white' }}></hr>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Address</label><span>*</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <div>
                                        <label>Street</label><span>*</span>
                                        <hr style={{ width: 229, border: '1px solid white' }}></hr>
                                    </div>
                                    <div>
                                        <label>City/Suburb</label>
                                        <hr style={{ width: 229, border: '1px solid white' }}></hr>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <div>
                                        <label>State</label><span>*</span>
                                        <hr style={{ width: 229, border: '1px solid white' }}></hr>
                                    </div>
                                    <div>
                                        <label>Zip/PostCode</label><span>*</span>
                                        <hr style={{ width: 229, border: '1px solid white' }}></hr>
                                    </div>
                                </div>
                                <div>
                                    <label>Country</label><span>*</span>
                                    <hr style={{ border: '1px solid white' }}></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form