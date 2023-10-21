use wgpu_raytrace::run;

fn main() {
    pollster::block_on(run())
}
