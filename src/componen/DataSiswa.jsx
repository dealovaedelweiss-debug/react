function DataSiswa({name, usia, jurusan, alamat}) {
    //props : object : props.name, props.usia, props.jurusan

    return (
    <div>
        <h1>{name}</h1>
        <p>
            <strong>Usia</strong>: {usia}
        </p>
        <p>
            <strong>Jurusan</strong>: {jurusan}
        </p>
        <p>
            <strong>Alamat</strong>: {alamat}
        </p>
    </div>
    );
}
export default DataSiswa;
