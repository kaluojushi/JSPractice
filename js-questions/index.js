const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
  const res1 = await Promise.all([promise1, promise2])
  console.log(1, res1)
  const res2  = await Promise.all([promise3, promise4])
  console.log(2, res2)
  return [res1, res2]
}

runPromises()
    .then(res => console.log(3, res))
    .catch(err => console.log(4, err))

console.log(Promise.reject(3).catch(err => console.log(err)))