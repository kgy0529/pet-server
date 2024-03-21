module.exports=(sequelize, DataTypes)=>{
    const products=sequelize.define("Product", {
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        price:{
            type:DataTypes.INTEGER(20),
            allowNull:false,
        },
        seller:{
            type:DataTypes.STRING(30),
            allowNull:false,
        },
        description:{
            type:DataTypes.INTEGER(300),
            allowNull:false,
        },
        imageUrl:{
            type:DataTypes.INTEGER(300),
            allowNull:true,
        },
    });
    return products;
}