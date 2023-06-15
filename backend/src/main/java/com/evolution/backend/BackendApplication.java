package com.evolution.backend;

import com.evolution.backend.model.Course;
import com.evolution.backend.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Angular");
			c.setCategory("Front-end development");

			courseRepository.save(c);

			Course c1 = new Course();
			c1.setName("Spring");
			c1.setCategory("Back-end development");

			courseRepository.save(c1);
		};
	}

}
