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
        <img src={el.img} width = "300" />
        
    </div>
    )
        )
        }
        {props.HandleName()}
</div>
    );
};
export default Profilecomponent;