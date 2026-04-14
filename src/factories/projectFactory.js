export function createProject(name1){
    return{
        id: crypto.randomUUID(),
        name1,
        todos:[]
    };
}