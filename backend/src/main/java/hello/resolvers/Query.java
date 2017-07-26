package hello.resolvers;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.coxautodev.graphql.tools.GraphQLRootResolver;
import hello.CharacterRepository;
import hello.types.Character;
import hello.types.Droid;
import hello.types.Episode;
import hello.types.Human;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Query implements GraphQLQueryResolver {

    @Autowired
    private CharacterRepository characterRepository;

    public Character hero(Episode episode) {
        return episode != null ? characterRepository.getHeroes().get(episode) : characterRepository.getCharacters().get("1000");
    }

    public Human human(String id) {
        return (Human) characterRepository.getCharacters().values().stream()
            .filter(character -> character instanceof Human && character.getId().equals(id))
            .findFirst()
            .orElseGet(null);
    }

    public Droid droid(String id) {
        return (Droid) characterRepository.getCharacters().values().stream()
            .filter(character -> character instanceof Droid && character.getId().equals(id))
            .findFirst()
            .orElseGet(null);
    }

    public Character character(String id) {
        return characterRepository.getCharacters().get(id);
    }
}
