const Profilecomponent = (props) => {
    console.log(props)
    return (
<div>
    {
    props.donnee.map(el=>(
    <div>
        <p>{el.fullName}</p>
        <p>{el.bio}</p>
        <p>{el.profession}</p>
        
    </div>
    )
        )
        }
        {props.HandleName()}
</div>
    );
};
export default Profilecomponent;