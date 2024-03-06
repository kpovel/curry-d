fn main() {
    let curried_sum = curry(sum);
    let res = curried_sum(1)(2);
    println!("Res: {}", res);
}

fn curry<T>(f: fn(T, T) -> T) -> Box<dyn Fn(T) -> Box<dyn Fn(T) -> T>>
where
    T: Copy + 'static,
{
    Box::new(move |a| {
        Box::new(move |b| {
            f(a, b)
        })
    })
}

fn sum<T>(a: T, b: T) -> T
where
    T: std::ops::Add<Output = T>,
{
    a + b
}
